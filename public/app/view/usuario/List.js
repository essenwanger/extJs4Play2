Ext.define('Play.view.usuario.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.usuariolist',

    title : 'Todos los usuarios',

	store: 'Usuarios',

    initComponent: function() {

        this.columns = [
            {header: 'Id',  dataIndex: 'id',  flex: 1},
			{header: 'Usuario',  dataIndex: 'usuario',  flex: 1},
            {header: 'Password',  dataIndex: 'password',  flex: 1},
            {header: 'Nombre', dataIndex: 'nombre', flex: 1}
        ];

        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Add',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Delete',
                action: 'delete'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'top',
            store: 'Usuarios',
            displayInfo: true,
            displayMsg: 'Displaying contacts {0} - {1} of {2}',
            emptyMsg: "No contacts to display"
        }];

        this.callParent(arguments);
    }
});