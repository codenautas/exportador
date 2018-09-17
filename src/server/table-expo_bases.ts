"use strict";
import {TableContext,TableDefinition} from "operativos"

function expo_bases(context:TableContext):TableDefinition{
    var admin = context.user.rol === 'admin';
    return {
        name: 'expo_bases',
        elementName: 'base para exportación',
        editable: admin,
        fields: [
            {name:"operativo"        , typeName:'text'                },
            {name:"expo_base"        , typeName:'text'                },
            {name:"descripcion"      , typeName:'text'                },
        ],
        primaryKey: ['operativo','expo_base'],
        foreignKeys:[
            {references:'operativos', fields:['operativo']},
        ],
        detailTables: [
            { table: 'expo_tablas', fields: ['expo_base'], abr: 'T', label: 'tablas exportación' }
        ]
    }
}

export {expo_bases};