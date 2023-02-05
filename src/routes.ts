import { CardController } from "./controller/CardController"

export const Routes = [{
    method: "get",
    route: "/cards",
    controller: CardController,
    action: "all"
},{
    method: "get",
    route: "/",
    controller: CardController,
    action: "hello"
}, {
    method: "get",
    route: "/cards/:id",
    controller: CardController,
    action: "one"
}, {
    method: "post",
    route: "/cards",
    controller: CardController,
    action: "save"
},
{
    method: "post",
    route: "/test",
    controller: CardController,
    action: "test"
}, 
{
    method: "delete",
    route: "/cards/:id",
    controller: CardController,
    action: "remove"
}]