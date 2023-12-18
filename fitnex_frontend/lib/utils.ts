import axios from "axios"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Props = {
  url: string | any,
  options?: any
}

export const exerciseOptions = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': 'b66e203ba8msh2f5903f28ae9dcbp1fdd05jsnb4b4f8add13b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': 'b66e203ba8msh2f5903f28ae9dcbp1fdd05jsnb4b4f8add13b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}

// export const fetchData = async ({ url, options }: Props) => {
//   const response = await fetch(url, options);
//   const data = await response.json();

//   return data
// }

export const fetchData = async ({ url }: Props) => {
  const response = await axios.get(url);
  const data = await response.data;

  return data
}