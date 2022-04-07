const uuid = require("uuid")
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiEror = require('../error/ApiError')
class DeviceController {
    async create(req, res, next) {
        try {
           let { name, price, typeId, brandId, info } = req.body
        const { img } = req.files
        let fileName = uuid.v4() + '.jpeg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({ name, price, brandId, typeId, img: fileName })
            if (info) {
               info = JSON.parse(info)
                info.forEach(e => {
                    DeviceInfo.create(
                        {
                            title: e.title,
                            description: e.description,
                            deviceId : device.id
                        }
                    )
                });
            }
        
        
        return res.json(device) 
        } catch (error) {
            next(ApiEror.badRequest(error.message))
        }
        
    }
    async getAll(req, res) {
        let { typeId, brandId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offSet = page * limit - limit
        let devices
        if (!typeId && !brandId) {
            devices = await Device.findAndCountAll({limit, offSet})
        }
        if (!typeId && brandId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit , offSet})
        }
        if (typeId && !brandId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit ,offSet})
        }
        if (typeId && brandId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit ,offSet})
        }
        
        return res.json(devices)
    }
    async getOne(req, res) {
        const { id } = req.params
        const device = await Device.findOne({
            where: { id },
            include: [{ model: DeviceInfo, as: 'info' }]
        })
        return res.json(device)
        
    }
    
}

module.exports = new DeviceController()