import "reflect-metadata"
import { DataSource } from "typeorm"
import { Card } from "./entity/Card"

export const AppDataSource = new DataSource({
    type: "postgres",
        url: "postgres://mcftiwqq:X_qdOqlHD0pMKUK8oV4Nf0AidJ6IfQ0q@dumbo.db.elephantsql.com/mcftiwqq",
    poolSize: 1000,
    synchronize: false,
    logging: true,
    entities: [Card],
    migrations: [],
    subscribers: [],
})
