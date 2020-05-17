export class Election {
  선거구_시도명: string
  투표_지역구id: number
  지역명: string
  읍면동명: string
  투표구명: string
  선거인수: number
  투표수: number

  constructor(response:any) {
    console.log(response);
    this.선거구_시도명 = response['선거구_시도명']
    this.투표_지역구id = response['투표_지역구id']
    this.투표구명 = response['투표구명']
    this.읍면동명 = response['읍면동명']
    this.지역명 = response['지역명']
    this.선거인수 = response['선거인수']
    this.투표수 = response['투표수']

  }
}

export default Election