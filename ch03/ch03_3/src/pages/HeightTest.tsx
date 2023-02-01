import { Title, Div } from "../components";

export default function HeightTest() {
  return (
    <section className="mt-4">
      <Title>HeightTest</Title>
      <Div className="h-40 text-center bg-blue-500 mt-4">
        <p className="text-center text-red-50">h-40</p>
      </Div>
      <Div className="bg-red-500 h-1/2">
        <p className="text-center text-red-50">h-1/2</p>
      </Div>
    </section>
  );
}
