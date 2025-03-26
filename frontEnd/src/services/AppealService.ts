import api from '../api/axios';

export interface Appeal {
  _id?: string;
  user: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount?: number;
  image?: string;
  reason: string;
  status?: 'active' | 'completed' | 'closed';
  createdAt?: string;
  updatedAt?: string;
}

export const createAppeal = async (appealData: FormData): Promise<Appeal> => {
  try {
    const response = await api.post('/api/appeals', appealData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to create appeal:', error);
    throw error;
  }
};

export const fetchUserAppeals = async (): Promise<Appeal[]> => {
  try {
    const response = await api.get('/api/appeals/my-appeals');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user appeals:', error);
    throw error;
  }
};

export const fetchAllAppeals = async (): Promise<Appeal[]> => {
  try {
    const response = await api.get('/api/appeals');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch appeals:', error);
    throw error;
  }
};