import { chromeDirection, ieDirection } from "../Interface"

export const isHorizontal = (direction: string) => {
  return  direction === chromeDirection.left || 
  direction === chromeDirection.right || 
  direction === ieDirection.left || 
  direction === ieDirection.right
}

export const isVertical = (direction: string) => {
  return  direction === chromeDirection.up || 
  direction === chromeDirection.down || 
  direction === ieDirection.up || 
  direction === ieDirection.down
}

