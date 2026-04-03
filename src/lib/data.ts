import frameRound from '@/assets/frame-round.jpg';
import frameAviator from '@/assets/frame-aviator.jpg';
import frameSquare from '@/assets/frame-square.jpg';
import frameSport from '@/assets/frame-sport.jpg';
import frameCateye from '@/assets/frame-cateye.jpg';
import frameWayfarer from '@/assets/frame-wayfarer.jpg';
import frameClubmaster from '@/assets/frame-clubmaster.jpg';
import type { Frame } from './store';

export const frames: Frame[] = [
  { id: '1', name: 'Eclipse Aviator', price: 189, image: frameAviator.src, type: 'aviator', gender: 'unisex', colors: ['#1a1a1a', '#c0a062', '#4a4a4a'], featured: true, trending: true },
  { id: '2', name: 'Orbit Round', price: 159, image: frameRound.src, type: 'round', gender: 'unisex', colors: ['#c0a062', '#1a1a1a', '#8b6914'], featured: true },
  { id: '3', name: 'Vertex Square', price: 199, image: frameSquare.src, type: 'square', gender: 'men', colors: ['#1a1a1a', '#333333'], featured: true, trending: true },
  { id: '4', name: 'Surge Sport', price: 229, image: frameSport.src, type: 'sport', gender: 'unisex', colors: ['#1a1a1a', '#1e40af'], trending: true },
  { id: '5', name: 'Luna Cat-Eye', price: 179, image: frameCateye.src, type: 'cateye', gender: 'women', colors: ['#8b4513', '#1a1a1a'], featured: true },
  { id: '6', name: 'Classic Wayfarer', price: 169, image: frameWayfarer.src, type: 'wayfarer', gender: 'unisex', colors: ['#1a1a1a', '#2d4a1a'], trending: true },
  { id: '7', name: 'Prestige Clubmaster', price: 209, image: frameClubmaster.src, type: 'clubmaster', gender: 'unisex', colors: ['#1a1a1a', '#c0a062'] },
];

export const lensTypes = [
  { id: 'standard', name: 'Standard', price: 0, description: 'Basic UV protection' },
  { id: 'bluelight', name: 'Blue Light Filter', price: 30, description: 'Blocks harmful blue light' },
  { id: 'polarized', name: 'Polarized', price: 50, description: 'Reduces glare from surfaces' },
  { id: 'uv400', name: 'UV400 Protection', price: 25, description: '100% UV protection' },
  { id: 'photochromic', name: 'Photochromic', price: 70, description: 'Auto-darkening lenses' },
];

export const lensColors = [
  { id: 'gray', name: 'Classic Gray', hex: '#4a4a4a' },
  { id: 'brown', name: 'Amber Brown', hex: '#8b6914' },
  { id: 'green', name: 'Forest Green', hex: '#2d4a1a' },
  { id: 'blue', name: 'Ocean Blue', hex: '#1e40af' },
  { id: 'gold', name: 'Gold Mirror', hex: '#c0a062' },
  { id: 'rose', name: 'Rose', hex: '#9f3b5c' },
];

export const addOns = [
  { id: 'scratch', name: 'Scratch Resistant', price: 20 },
  { id: 'antiglare', name: 'Anti-Glare Coating', price: 25 },
  { id: 'water', name: 'Water Resistant', price: 15 },
  { id: 'case', name: 'Premium Case', price: 35 },
];
