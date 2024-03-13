function status(request, response) {
  response.status(200).json({ place: "holder" });
}

export default status;
