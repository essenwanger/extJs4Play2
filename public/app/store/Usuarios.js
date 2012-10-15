Ext.define('Play.store.Usuarios', {
    extend: 'Ext.data.Store',
    model: 'Play.model.Usuario',
	autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
	        read: 'list'
	    },
        reader: {
            type: 'json',
            root: 'usuario',
            successProperty: 'success'
        }
    }
});