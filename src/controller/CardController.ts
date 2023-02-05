import { NextFunction, Request, Response } from "express"
import { Card } from "../entity/Card"
import { AppDataSource } from "../data-source"

export class CardController {

    private cardRepository = AppDataSource.getRepository(Card)

    async hello(request: Request, response: Response, next: NextFunction) {
        return "it works"
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cardRepository.find()
    }

    async test(request: Request, response: Response, next: NextFunction) {
        return request.body
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.cardRepository.findOne({
            where: {
                id: request.params.id
            }
        })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.cardRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.cardRepository.findOneBy({ id: request.params.id })
        await this.cardRepository.remove(userToRemove)
    }

}