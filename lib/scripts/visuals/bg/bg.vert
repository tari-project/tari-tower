varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}
