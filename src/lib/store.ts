import { create } from 'zustand';

export interface Frame {
  id: string;
  name: string;
  price: number;
  image: string;
  type: 'aviator' | 'round' | 'square' | 'sport' | 'cateye' | 'wayfarer' | 'clubmaster';
  gender: 'unisex' | 'men' | 'women';
  colors: string[];
  featured?: boolean;
  trending?: boolean;
}

export interface CustomizationOptions {
  frameId: string;
  lensType: string;
  lensColor: string;
  addOns: string[];
  engraving: string;
}

export interface CartItem {
  id: string;
  frame: Frame;
  customization: CustomizationOptions;
  quantity: number;
  totalPrice: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, { ...item, id: crypto.randomUUID() }],
    })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
      ),
    })),
  clearCart: () => set({ cart: [] }),
  cartTotal: () =>
    get().cart.reduce((sum, i) => sum + i.totalPrice * i.quantity, 0),
}));
