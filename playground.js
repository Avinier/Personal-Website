//N drag
if ((offsetX === 0) & (-5 < offsetY < 0)) {
  setShadowPosX(0);
  setShadowPosY(5);
} else if ((offsetX === 0) & (offsetY < -5)) {
  setShadowPosX(0);
  setShadowPosY(10);
}
//NE drag
else if ((offsetX > 0) & (-5 < offsetY < 0)) {
  setShadowPosX(-5);
  setShadowPosY(5);
} else if ((offsetX > 0) & (offsetY < -5)) {
  setShadowPosX(-10);
  setShadowPosY(10);
}
//E drag
else if ((offsetY === 0) & (5 > offsetX > 0)) {
  setShadowPosX(-5);
  setShadowPosY(0);
} else if ((offsetY === 0) & (offsetX > 5)) {
  setShadowPosX(-10);
  setShadowPosY(0);
}
//SE drag
else if ((5 > offsetY > 0) & (5 > offsetX > 0)) {
  setShadowPosX(-5);
  setShadowPosY(-5);
} else if ((offsetY > 5) & (offsetX > 5)) {
  setShadowPosX(-10);
  setShadowPosY(-10);
}
//S drag
if ((offsetX === 0) & (5 > offsetX > 0)) {
  setShadowPosX(0);
  setShadowPosY(-5);
} else if ((offsetX === 0) & (offsetX > 5)) {
  setShadowPosX(0);
  setShadowPosY(-10);
}
//SW drag
else if ((offsetY > 0) & (-5 < offsetX < 0)) {
  setShadowPosX(5);
  setShadowPosY(-5);
} else if ((offsetY > 0) & (offsetX < -5)) {
  setShadowPosX(10);
  setShadowPosY(-10);
}
//W drag
else if ((offsetY === 0) & (-5 < offsetX < 0)) {
  setShadowPosX(5);
  setShadowPosY(0);
} else if ((offsetY === 0) & (offsetX < -5)) {
  setShadowPosX(10);
  setShadowPosY(0);
}
//NW drag
else if ((5 > offsetX > 0) & (5 > offsetY > 0)) {
  setShadowPosX(5);
  setShadowPosY(5);
} else if ((offsetX > 5) & (offsetY > 5)) {
  setShadowPosX(10);
  setShadowPosY(10);
}
