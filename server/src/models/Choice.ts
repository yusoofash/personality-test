import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize';
import sequelize from '../config/db';
// eslint-disable-next-line import/no-cycle
import Question from './Question';

const PersonalityTypeEnum = ['introvert', 'extrovert', 'ambivert'] as const;
type PersonalityType = typeof PersonalityTypeEnum[number];

class Choice extends Model<InferAttributes<Choice>, InferCreationAttributes<Choice>> {
  declare id: CreationOptional<number>;

  declare questionId: ForeignKey<Question['id']>;

  declare description: string;

  declare personalityType: PersonalityType;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Choice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    personalityType: {
      type: DataTypes.ENUM,
      values: PersonalityTypeEnum,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize,
    tableName: 'choices'
  }
);

export default Choice;
