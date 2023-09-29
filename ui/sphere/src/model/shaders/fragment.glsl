varying vec2 vUv;
varying float vDistort;

uniform float uIntensity;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}   

void main() {
  float distort = vDistort * uIntensity;

  /**
   These values are my fav combination, 
   they remind me of Zach Lieberman's work.
   @see https://iquilezles.org/www/articles/palettes/palettes.htm 
   */
  vec3 brightness = vec3(0.3, 0.3, 0.8);
  vec3 contrast = vec3(0.2, 0.2, 0.2);
  vec3 oscilation = vec3(1.0, 1.0, 1.0);
  vec3 phase = vec3(0.17, 0.25, 0.01);
  
  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);

  gl_FragColor = vec4(color, 1.0);
}