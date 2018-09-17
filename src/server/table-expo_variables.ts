"use strict";
import {TableContext,TableDefinition} from "operativos"

function expo_variables(context:TableContext):TableDefinition{
    var admin = context.user.rol === 'admin';
    return {
        name: 'expo_variables',
        elementName: 'variable',
        editable: admin,
        fields: [
            // { name: "operativo"          , typeName: 'text'    }, ya la tiene expo_tabla
            { name: "variable"           , typeName: 'text'    },
            { name: "expo_tabla"         , typeName: 'text'    },
            { name: "abr"                , typeName: 'text'    },
            // { name: "nombre"             , typeName: 'text'    },
            // { name: "tipovar"            , typeName: 'text'    },
            { name: "unidad_analisis"    , typeName: 'text'   , nullable:false                    },
            // { name: "clase"              , typeName: 'text'   , nullable:false                    },
            // { name: "es_pk"              , typeName: 'boolean', defaultValue: false},
            // { name: "es_nombre_unico"    , typeName: 'boolean' },
            { name: "activa"             , typeName: 'boolean', nullable:false, defaultValue:false},
            // { name: "filtro"             , typeName: 'text'    },
            // { name: "expresion"          , typeName: 'text'    },
            // { name: "cascada"            , typeName: 'text'    },
            // { name: "nsnc_atipico"       , typeName: 'integer' },
            // { name: "cerrada"            , typeName: 'boolean' },
            // { name: "funcion_agregacion" , typeName: 'text'    },
            // { name: "tabla_agregada"     , typeName: 'text'    },
            { name: "grupo"              , typeName: 'text'    },
            { name: "orden"              , typeName: 'integer'    },

        ],
        primaryKey: ['variable','expo_tabla'],
        foreignKeys:[
            {references:'expo_tablas', fields:['expo_tabla']},
            {references:'unidad_analisis', fields:['unidad_analisis']},
        ],
        detailTables: [
            { table: 'expo_variables_opciones', fields: ['variable'], abr: 'o', label: 'opciones' }
        ],
    }
}

export {expo_variables};