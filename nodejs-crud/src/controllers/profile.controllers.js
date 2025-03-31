const StudentModel = require('../schema/studentSchema.js'); // ✅ Ensure this path is correct

// Save a new user
exports.SaveUser = async (req, res) => {
    try {
        const newStudent = new StudentModel({
            Name: req.body.Name,
            Email: req.body.Email
        });

        const savedStudent = await newStudent.save();
        res.status(201).json({ message: "✅ Data inserted successfully", student: savedStudent });
    } catch (error) {
        console.error("❌ Error saving student:", error);
        res.status(500).json({ message: "❌ Failed to insert data", error: error.message });
    }
};

// Update user details
exports.UpdateUser = async (req, res) => {
    try {
        const studentId = req.params.id; // `_id` from MongoDB
        const updatedData = {
            Name: req.body.Name,
            Email: req.body.Email
        };

        const updatedStudent = await StudentModel.findByIdAndUpdate(studentId, updatedData, { new: true });

        if (!updatedStudent) {
            return res.status(404).json({ message: "❌ Student not found" });
        }

        res.status(200).json({ message: "✅ Data updated successfully", student: updatedStudent });
    } catch (error) {
        console.error("❌ Error updating student:", error);
        res.status(500).json({ message: "❌ Failed to update data", error: error.message });
    }
};

// Get all users
exports.GetUser = async (req, res) => {
    try {
        const students = await StudentModel.find({});
        res.status(200).json(students);
    } catch (error) {
        console.error("❌ Error fetching students:", error);
        res.status(500).json({ message: "❌ Failed to fetch data", error: error.message });
    }
};

// Delete a user
exports.DeleteUser = async (req, res) => {
    try {
        const studentId = req.params.id;
        const deletedStudent = await StudentModel.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ message: "❌ Student not found" });
        }

        res.status(200).json({ message: "✅ Data deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting student:", error);
        res.status(500).json({ message: "❌ Failed to delete data", error: error.message });
    }
};
