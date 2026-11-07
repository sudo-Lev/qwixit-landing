export type CoachPoint = { x: number; y: number };
export type CoachMotion = CoachPoint & { vx: number; vy: number };

/** Critically damped motion with continuous velocity when the destination changes. */
export function advanceCoachMotion(current: CoachMotion, target: CoachPoint, elapsed: number): CoachMotion {
  const dt = Math.min(Math.max(elapsed, 0), 0.032);
  if (!dt) return current;
  const frequency = 9;
  const decay = Math.exp(-frequency * dt);
  const axis = (position: number, velocity: number, destination: number) => {
    const offset = position - destination;
    const impulse = (velocity + frequency * offset) * dt;
    return {
      position: destination + (offset + impulse) * decay,
      velocity: (velocity - frequency * impulse) * decay,
    };
  };
  const x = axis(current.x, current.vx, target.x);
  const y = axis(current.y, current.vy, target.y);
  const dx = x.position - current.x;
  const dy = y.position - current.y;
  const distance = Math.hypot(dx, dy);
  const scale = distance ? Math.min(1, (800 * dt) / distance) : 1;
  return {
    x: current.x + dx * scale,
    y: current.y + dy * scale,
    vx: x.velocity * scale,
    vy: y.velocity * scale,
  };
}
