Ext.define('Play.view.usuario.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.usuarioedit',

    title : 'Editar Usuario',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 5 5',
                border: false,
                items: [
					{
					    xtype: 'hidden',
					    name : 'id'
					},
					{
                        xtype: 'textfield',
                        name : 'usuario',
                        fieldLabel: 'Usuario'
                    },
                    {
                        xtype: 'textfield',
                        name : 'password',
                        fieldLabel: 'Password'
                    },
                    {
                        xtype: 'textfield',
                        name : 'nombre',
                        fieldLabel: 'Nombre'
                    }
                ]
            }
        ];

        this.buttons = [
            {
            	iconCls: 'icon-save',
                text: 'Save',
                action: 'save'
            },
            {
            	iconCls: 'icon-reset',
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});