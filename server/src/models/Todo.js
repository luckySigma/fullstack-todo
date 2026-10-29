const todoSchema = new mongoose.Schema(
  {
    titile: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxLength: [100, "Title must be 100 characters or less"],
    },
    description: {
      type: String,
      trim: true,
      default: "",
      maxLength: [500, "Title must be 500 characters or less"],
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;