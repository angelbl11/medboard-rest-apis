import Med from "../models/Meds";

export const createMeds = async (req, res) => {
  const { name, grammage, lab, type, status, caducity, available, imgURL } =
    req.body;
  const newMed = new Med({
    name,
    grammage,
    lab,
    type,
    status,
    caducity,
    available,
    imgURL,
  });
  const medSaved = await newMed.save();
  res.status(201).json(medSaved);
};

export const getMeds = async (req, res) => {
  const meds = await Med.find();
  res.json(meds);
};

export const updateMeds = async (req, res) => {
  const updatedMed = await Med.findByIdAndUpdate(req.params.medId, req.body, {
    new: true,
  });
  res.status(204).json(updatedMed);
};

export const deleteMeds = async (req, res) => {
  const { medId } = req.params;
  await Med.findByIdAndDelete(medId);
  res.status(204).json();
};
