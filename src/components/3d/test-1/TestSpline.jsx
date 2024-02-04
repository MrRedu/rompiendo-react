import Spline from '@splinetool/react-spline'

export const TestSpline = () => {
  return (
    <Spline
      style={{
        cursor: 'pointer',
        outline: '2px solid lime',
        width: '250px',
        height: '450px',
      }}
      scene="https://prod.spline.design/1X2EOkB9MivSjz23/scene.splinecode"
    />
  )
}
