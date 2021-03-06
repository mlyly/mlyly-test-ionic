
angular.module('wSQL.config', [])
        .constant("W_SQL_CONFIG", {
            PARAMS: {
                name: "test_db",
                version: "1.0",
                sub_name: "my_db_sub_name",
                size: 1000000
            },
            TABLES_SQL: {
                "todo": [
                    "id INTEGER PRIMARY KEY AUTOINCREMENT NULL",
                    "title VARCHAR(255)",
                    "completed BOOL NOT NULL DEFAULT 0",
                    "created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
                ]
            },
            DEBUG_LEVEL: 4,
            CLEAR: false
        });
