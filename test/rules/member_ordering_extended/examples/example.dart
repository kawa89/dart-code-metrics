class Test {
  String _value;

  static const staticConstField = '';

  void doWork() {}

  void doAnotherWork() {}

  final data = 1;

  Test();

  factory Test.empty() => Test();

  Test.create();

  String _doWork() => 'test';

  void _doAnotherWork() {}

  String get value => _value;

  set value(String str) => _value = str;
}
