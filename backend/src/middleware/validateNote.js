const validateNote = (req, res, next) => {
  const { title, content } = req.body;
  const errors = [];

  if (!title || !title.trim()) {
    errors.push("Title is required");
  } else if (title.trim().length < 3) {
    errors.push("Title must be at least 3 characters");
  } else if (title.trim().length > 100) {
    errors.push("Title cannot exceed 100 characters");
  }

  if (!content || !content.trim()) {
    errors.push("Content is required");
  } else if (content.trim().length < 5) {
    errors.push("Content must be at least 5 characters");
  } else if (content.trim().length > 10000) {
    errors.push("Content cannot exceed 10,000 characters");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors.join(", ") });
  }

  // Sanitize before passing forward — trim whitespace
  req.body.title = title.trim();
  req.body.content = content.trim();

  next();
};

export default validateNote;