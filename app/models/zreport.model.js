module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        date: { type: Date, default: Date.now },
        total: Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Zreport = mongoose.model("zreport", schema);
    return Zreport;
  };
  