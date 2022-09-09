import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class ListItem extends MongoDataSource {
  async getListItems() {
    return await this.model.find();
  }

  async getListItem(id) {
    return await this.findOneById(id);
  }

  async createListItem({ text }) {
    return await this.model.create({ text, timeCreated: Date.now(), timeModified: Date.now() });
  }

  async updateListItem({id, text}) {
    return await this.model.findByIdAndUpdate(
      { _id: id },
      { text: text, timeModified: Date.now() },
      (err, result) => {
        if (err) {
          console.log("There has been an error updating record", err);
        } else {
          console.log(result);
        }
      }
    )
  }

  async deleteListItem(id) {
    return await this.model.findByIdAndDelete(
      { _id: id },
      (err, result) => {
        if (err) {
          console.log("There has been an error deleting record", err);
        } else {
          console.log(result);
        }
      }
    )
  }
}