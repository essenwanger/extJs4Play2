Ext.define('Play.controller.Usuarios', {
    extend: 'Ext.app.Controller',

    stores: ['Usuarios'],
    
	views: ['usuario.List','usuario.Edit'],

	init: function() {
		this.control({
            'usuariolist dataview': {
                itemdblclick: this.editUsuario
            },
            'usuariolist button[action=add]': {
            	click: this.editUsuario
            },
            'usuariolist button[action=delete]': {
                click: this.deleteUsuario
            },
            'usuarioedit button[action=save]': {
                click: this.updateUsuario
            }
        });
    },
	
	editUsuario: function(grid, record) {
		var edit = Ext.create('Play.view.usuario.Edit').show();
	    if(record){
	    	edit.down('form').loadRecord(record);
	    }
	},
    
    updateUsuario: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        var Msg = function (msg, btn){
            Ext.Msg.show({
                title: 'Info',
                msg: msg,
                buttons: btn,
                icon: Ext.MessageBox.INFO
            });
        };
        var store = this.getUsuariosStore();
        if (values['id'] != ""){
			Ext.Ajax.request({
	            url: '/update',
	            params: values,
	            success:function(response){
	                var response = Ext.decode(response.responseText);
	                if(response.success){
	                	win.close();
	                    Msg(response.msg, Ext.MessageBox.OK);
	                    store.load();
	                }else{
	                    Msg(response.msg, Ext.MessageBox.ERROR);
	                }
	            },
	            failure:function(form, action){
	                Msg('No se puede modificar, registro relacionado del usuario', Ext.MessageBox.ERROR);
	            }
	        });
		} else{
			Ext.Ajax.request({
	            url: '/create',
	            params: values,
	            success:function(response){
	                var response = Ext.decode(response.responseText);
	                if(response.success){
	                	win.close();
	                    Msg(response.msg, Ext.MessageBox.OK);
	                    store.load();
	                }else{
	                    Msg(response.msg, Ext.MessageBox.ERROR);
	                }
	            },
	            failure:function(form, action){
	                Msg('No se puede crear el usuario', Ext.MessageBox.ERROR);
	            }
	        });
		}
    },

    deleteUsuario: function(button){
    	var Msg = function (msg, btn){
            Ext.Msg.show({
                title: 'Info',
                msg: msg,
                buttons: btn,
                icon: Ext.MessageBox.INFO
            });
        };
        var store = this.getUsuariosStore();
        var grid = button.up('panel'),
    	record = grid.getSelectionModel().getLastSelected();
    	if(record){
    		Ext.Ajax.request({
	            url: '/delete',
	            params: {
	            	'id':record.data.id
	            },
	            success:function(response){
	                var response = Ext.decode(response.responseText);
	                if(response.success){
	                    Msg(response.msg, Ext.MessageBox.OK);
	                    store.load();
	                }else{
	                    Msg(response.msg, Ext.MessageBox.ERROR);
	                }
	            },
	            failure:function(form, action){
	                Msg('No se puede eliminar el usuario', Ext.MessageBox.ERROR);
	            }
	        });
    	}else{
    		Msg('No ha seleccionado ningun usuario', Ext.MessageBox.ERROR);
    	}
    }
    
});