/* eslint-disable require-jsdoc */
// eslint-disable-next-line max-len
import VideoManagerModel from '../backingservices/databases/mongodb/models/videomanagers.model';

const getUniqueValues = (array: any) => [...new Set(array)];


class PROFILEMONGOMETHODS {
  async getAllManagers() {
    const queryAllSearch = {};
    const allManagers = await VideoManagerModel.find(queryAllSearch)||[];
    return allManagers;
  }

  async getManagerByIdSpecifico(id: any) {
    const manager = await VideoManagerModel.findOne({_id: id}) || {};
    return manager;
  }

  async getManagerById(id: any) {
    const manager = await VideoManagerModel.findById(id) || {};
    return manager;
  }

  async getManagersByIds(ids: any) {
    const managers = await VideoManagerModel.find({
      _id: {$in: getUniqueValues(ids)},
    }) || [];

    return managers;
  }

  async getManagerByField(field: any, keySearch: any) {
    const manager = await VideoManagerModel.findOne({
      [field]: keySearch,
    })|| {};

    return manager;
  }

  async getManagersByFields(fields: any, keySearch: any) {
    const objectWithFields = {};

    for (const field of fields) {
      objectWithFields[field] = keySearch;
    }

    const managers = await VideoManagerModel.find(objectWithFields)||[];
    return managers;
  }

  async getManagerByRoleLean(roleName: any) {
    const manager = await VideoManagerModel.findOne({
      role: roleName,
    }).lean();
    manager.firstName = 'Le cambio de nombre';
    // lo que se retorna es un objeto plano {JSON}
    return manager;
  }

  async getManagerByRoleExec(roleName: any) {
    const manager = await VideoManagerModel.findOne({
      role: roleName,
    }).exec();

    manager.firstName = 'Le cambio de nombre';
    await manager.save();

    return manager;
  }

  // update fns
  async updateManagerById() {}
  async updateManagerByField() {}
  async updateManagerByAnyField() {}
  async updateMultipleManagersByField() {}
  async updateMultipleManagersByMultipleFields() {}

  // create fns

  async createElementWithSave() {}
  async createElementWithCreate() {}
  async createElementWithInsertMany() {}
}

// TO DO
// operaciones de actualizacion
// operaciones de eliminado
// operaciones bulk

const profileMethodsController = new PROFILEMONGOMETHODS();


export {
  profileMethodsController,
};
