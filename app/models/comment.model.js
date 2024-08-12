module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
        title: String,
        description: String,
        published: Boolean    
    },
    {timestamps: true}
);


schema.method("toJson", function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});


const Comment = mongoose.model("comment", schema);
return Comment;

}; 