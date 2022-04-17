import { makeAutoObservable } from "mobx"
export default class DeviceStore {
    constructor() {
        this._types = [
            {
                id : 1 , name : 'Холодильники'
            },
            {
                id : 2 , name : 'Смартфони'
            }
        ]
        this._brands = [
            {
                id : 1 , name : 'Apple'
            },
            {
                id : 2 , name : 'Samsung'
            }
        ]
        this._devices = [
            {
                id : 1 , name : 'Iphone12pro', price: 500 ,rating : 5 ,img : 'https://jabko.ua/image/catalog/products/2022/04/081851/e3f64ed192da7ecb3a683e471962bd61.jpg'
            },
            {
                id : 2 , name : 'Iphone12pro', price: 500 ,rating : 5 ,img : 'https://jabko.ua/image/catalog/products/2022/04/081851/e3f64ed192da7ecb3a683e471962bd61.jpg'
            },
            {
                id : 3 , name : 'Iphone12pro', price: 500 ,rating : 5 ,img : 'https://jabko.ua/image/catalog/products/2022/04/081851/e3f64ed192da7ecb3a683e471962bd61.jpg'
            },
            {
                id : 4 , name : 'Iphone12pro', price: 500 ,rating : 5 ,img : 'https://jabko.ua/image/catalog/products/2022/04/081851/e3f64ed192da7ecb3a683e471962bd61.jpg'
            },
            {
                id : 5 , name : 'Iphone12pro', price: 500 ,rating : 5 ,img : 'https://jabko.ua/image/catalog/products/2022/04/081851/e3f64ed192da7ecb3a683e471962bd61.jpg'
            }
        ]
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
       return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}