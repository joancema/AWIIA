class BaseRepository
{
    constructor(model)
    {
        this.model = model;
    }
    //TODO: constructor recibe el modelo
    // get individual
    async get(id)
    {
        return await  this.model.findById(id)
    }
    // get general
    async getAll()
    {
        return await this.model.find();
    }
    // create
    async create(entity)
    {
        return await this.model.create(entity);
    }
    // update
    async update(id,entity)    
    {
        return await this.model.findByIdAndUpdate(id, entity, {new:true} );
    }
    // delete
    async delete(id)
    {
        return await this.model.findByIdAndDelete(id);
    }

}


module.exports = BaseRepository;