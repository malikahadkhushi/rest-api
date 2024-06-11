const { post_services } = require("../../services/post/index");
module.exports.create_post = async (req, resp) => {
  try {
    const payload = req.body;
    const response = await post_services.create_post(payload);
    if (response) {
      resp.status(200).json({ message: "successfull", data: response });
    } else {
      resp.status(200).json({ message: "unsuccessfull" });
    }
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports.get_All_post = async (req, resp) => {
  try {
    const response = await post_services.get_All();
    if (response) {
      resp.status(200).json({ message: "successfull", data: response });
    } else {
      resp.status(200).json({ message: "no data found", data: response });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.delete_post = async (req, resp) => {
  try {
    const { id } = req.query;
    const response = await post_services.delete(id);
    if (response) {
      resp.status(200).json({ message: "successfull", data: response });
    } else {
      resp.status(200).json({ message: "no deleted", data: response });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.update_post = async (req, resp) => {
  try {
    const payload = req.body;
    const response = await post_services.update(payload);
    if (response) {
      resp.status(200).json({ message: "successfull", data: response });
    } else {
      resp.status(200).json({ message: "no deleted", data: response });
    }
  } catch (error) {
    console.log(error);
  }
};
