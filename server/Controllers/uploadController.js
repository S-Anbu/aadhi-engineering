const dotenv = require("dotenv");
dotenv.config();
const { WeldingImagemodel,plumbingImagemodel,ElectricalImagemodel } = require("../Module/adminModel"); 



const Wdbimage = async (req, res) => {
  try {
    const images = await WeldingImagemodel.findOne();
    if (!images) {
      return res.status(404).json({ message: "No images found" });
    }
    res.status(200).json(images.urls);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
const Pdbimage = async (req, res) => {
  try {
    const images = await plumbingImagemodel.findOne();
    if (!images) {
      return res.status(404).json({ message: "No images found" });
    }
    res.status(200).json(images.urls);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
const Edbimage = async (req, res) => {
  try {
    const images = await ElectricalImagemodel.findOne();
    if (!images) {
      return res.status(404).json({ message: "No images found" });
    }
    res.status(200).json(images.urls);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


const uploadWelding = async (req, res) => {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ message: "Image URL required" });
  }

  try {
    // Extract version and filename from the URL
    const parts = imageUrl.split('/'); // Split the URL by "/"
    const version = parts[parts.length - 2]; 
    const filename = parts[parts.length - 1];

    const finalPath = `${version}/${filename}`; 

    let imageDoc = await WeldingImagemodel.findOne();

    if (!imageDoc) {
      imageDoc = new WeldingImagemodel({ urls: [finalPath] });
    } else {
      imageDoc.urls.push(finalPath);
      imageDoc.updatedAt = Date.now();
    }

    await imageDoc.save();

    res.status(201).json({ message: "Welding Image path saved successfully", path: finalPath });
  } catch (err) {
    console.error("Error saving:", err);
    res.status(500).json({ message: "Failed to save image path", error: err.message });
  }
};


const uploadPlumbing = async (req, res) => {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ message: "Image URL required" });
  }

  try {
    // Extract version and filename from the URL
    const parts = imageUrl.split('/'); // Split the URL by "/"
    const version = parts[parts.length - 2]; 
    const filename = parts[parts.length - 1];

    const finalPath = `${version}/${filename}`; 

    let imageDoc = await plumbingImagemodel.findOne();

    if (!imageDoc) {
      imageDoc = new plumbingImagemodel({ urls: [finalPath] });
    } else {
      imageDoc.urls.push(finalPath);
      imageDoc.updatedAt = Date.now();
    }

    await imageDoc.save();

    res.status(201).json({ message: "Plumbing Image path saved successfully", path: finalPath });
  } catch (err) {
    console.error("Error saving:", err);
    res.status(500).json({ message: "Failed to save image path", error: err.message });
  }
};

const uploadElectrical = async (req, res) => {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ message: "Image URL required" });
  }

  try {
    // Extract version and filename from the URL
    const parts = imageUrl.split('/'); // Split the URL by "/"
    const version = parts[parts.length - 2]; 
    const filename = parts[parts.length - 1];

    const finalPath = `${version}/${filename}`; 

    let imageDoc = await ElectricalImagemodel.findOne();

    if (!imageDoc) {
      imageDoc = new ElectricalImagemodel({ urls: [finalPath] });
    } else {
      imageDoc.urls.push(finalPath);
      imageDoc.updatedAt = Date.now();
    }

    await imageDoc.save();

    res.status(201).json({ message: "Electrical Image path saved successfully", path: finalPath });
  } catch (err) {
    console.error("Error saving:", err);
    res.status(500).json({ message: "Failed to save image path", error: err.message });
  }
};

module.exports = {uploadElectrical,uploadPlumbing,uploadWelding,Wdbimage,Pdbimage,Edbimage};