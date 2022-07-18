
export default interface InterfacePill {
  id: number;
  name: string;
  substanceId: number;
  substance: {
    id: number;
    name: string;
    code: string
  }
}