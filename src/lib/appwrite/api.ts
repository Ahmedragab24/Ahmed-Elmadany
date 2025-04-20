import { databases, DATABASE_ID, COLLECTIONS } from "./config";
import {
  About,
  Certificates,
  Experience,
  Message,
  Project,
  Review,
  Statistics,
} from "@/interfaces";

export const addData = async (data: Project) => {
  return await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.PROJECTS,
    "unique()",
    data
  );
};

export const getData = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.PROJECTS
  );
  return response.documents.reverse();
};

export const getCategories = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.CATEGORIES
  );
  return response.documents;
};

export const getProjectById = async (id: string) => {
  return await databases.getDocument(DATABASE_ID, COLLECTIONS.PROJECTS, id);
};

export const sendMessage = async (message: Message) => {
  return await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.MESSAGES,
    "unique()",
    message
  );
};

// Get about information
export async function getAbout() {
  if (!COLLECTIONS.ABOUT) {
    console.error("Cannot fetch about information: Missing configuration");
    throw new Error("Missing configuration");
  }

  try {
    // Since we expect only one about document, we'll get the first one
    const response = await databases!.listDocuments(
      DATABASE_ID,
      COLLECTIONS.ABOUT
    );

    return response.documents[0] as unknown as About;
  } catch (error) {
    console.error("Error fetching about information:", error);
    throw error;
  }
}

export const getReviews = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.REVIEWS
  );
  return response.documents as unknown as Review[];
};

export const getExperiences = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.EXPERIENCE
  );
  return response.documents as unknown as Experience[];
};

export const getStatistics = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.STATISTICS
  );
  return response.documents as unknown as Statistics[];
};

export const getCertificates = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.CERTIFICATES
  );
  return response.documents as unknown as Certificates[];
};
