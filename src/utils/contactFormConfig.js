const contactFormConfig = {
  fields: [
    { label: "First", size: 6, type: "text", isRequired: true },
    { label: "Last", size: 6, type: "text", isRequired: true },
    { label: "Phone", size: 6, type: "text", isRequired: false },
    { label: "Industry", size: 6, type: "text", isRequired: false },
    { label: "Email", size: 12, type: "text", isRequired: true },
    { label: "Message", size: 12, type: "textarea", isRequired: false },
  ],
  classes: {
  }
};

export default contactFormConfig