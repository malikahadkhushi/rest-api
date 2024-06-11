const { post_model } = require("../../schema/post/index");
module.exports.post_services = {
  create_post: (payload) => {
    try {
      return post_model.insertMany(payload);
    } catch (error) {
      throw error;
    }
  },

  get_All: () => {
    try {
      return post_model.find();
    } catch (error) {
      throw error;
    }
  },

  delete: (id) => {
    return post_model.deleteOne({ _id: id });
  },

  update: (payload) => {
    try {
      const { id, title } = payload;
      return post_model.updateOne({ _id: id }, { $set: { title: title } });
    } catch (error) {
      throw error;
    }
  },
};
