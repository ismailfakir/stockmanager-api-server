module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        description: String,
        active: Boolean,
        price: Number,
        picture: Buffer,
        supplier: [String],
        stock: Number,
        stockUnit: {type: String, enum:['st','kg','gr']},
        barCode: String,
        articleNumber: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tutorial = mongoose.model("product", schema);
    return Tutorial;
  };
  