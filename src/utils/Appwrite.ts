import { Iproject } from "@/interfaces";
import { Client, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`);

const databases = new Databases(client);

export { client, databases };

export const addData = async (data: Iproject) => {
  try {
    const response = await databases.createDocument(
      `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
      `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS}`,
      "unique()", // معرف فريد للوثيقة
      data // البيانات المرسلة
    );
    return response;
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

export const getData = async () => {
  try {
    const response = await databases.listDocuments(
      `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
      `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS}`
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getCategories = async () => {
  try {
    const response = await databases.listDocuments(
      `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
      `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CATEGORIES}`
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getProjectById = async (id: string) => {
  try {
    const response = await databases.getDocument(
      `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
      `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS}`, // Collection ID
      id
    );
    return response;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return null; // Return null if there is an error
  }
};

export const sendMessage = async (messageData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await databases.createDocument(
      `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`, // Database ID
      `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_MESSAGES}`, // Collection ID
      "unique()", // Document ID (use `unique()` for auto-generation)
      messageData // Data to save
    );

    console.log("Message sent successfully:", response);
    return response; // Return the response if needed
  } catch (error) {
    console.error("Error sending message:", error);
    return null; // Return null if there is an error
  }
};
