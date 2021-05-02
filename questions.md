- seeding -> 없으면 테이블 생성

- createdAt, updatedAt은 기본으로 생기는 컬럼인지 설정이 따로 있는지
참고 https://sequelize.org/master/class/lib/model.js~Model.html
option default: true

- findById -> findByPk() (sequelize)
single pk, composit pk (value 합쳐서)

- _id 와 같은 private 값은 언더바를 넣어서 표시

- .updateOne({ _id: this._id }, { $set: this })
$addFields and its alias $set