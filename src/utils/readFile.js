const fs = require('fs');

module.exports = {

  async readFile(req, res) {

    try {
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
      } else {
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let shape = req.files.shape;
          
          //Use the mv() method to place the file in upload directory (i.e. "uploads")
          shape.mv('./uploads/' + shape.name);
          fs.readFile('./uploads/'+shape.name,'utf8', (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            //console.log(data)
            res.send(data);
          });

          //Remove the file that was uploaded
          fs.unlink('./uploads/' + shape.name, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            //console.log('File deleted!');
          }); 
      }
  } catch (err) {
      res.status(500).send(err);
  }

    // const data = request.files;
    // console.log(data);
    // return response.json(data);
  }
}