interface MethodsOrmImplements {
  save: (data: any) => any[];
  findById: (id: number) => any[];
  findAll?: () => any[];
}
export default MethodsOrmImplements;
