import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum CardType {
    ROLE = "Роль",
    ABILITY = "Умение",
    DEAD_BONUS = "Мертвый бонус",
    LOOT = "Припас"
}

export enum CardTag {
    DEFENCIVE = "Защитное",
    KILL = "Убийство",
    DAY = "Дневное",
    NIGHT = "Ночное",
    DANGEROUS = "Опасная личность",
    MONEY = "Деньги"
}

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    type: string

    @Column("simple-array")
    tags: string[]

    @Column({ nullable: true })
    imageUrl: string

}
