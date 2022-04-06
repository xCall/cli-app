import logger from '../../src/utils/logger';

describe('Logger', () => {
  const spyLog = jest.spyOn(console, 'log').mockImplementation((args) => {
    console.info('mockImplementation');
    console.info(...args);
  });
  beforeEach(() => {
    spyLog.mockClear();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('Deve executar console.log ao chamar a função log', () => {
    logger.log('test');
  
    expect(spyLog).toHaveBeenCalledTimes(1);
  });
  
  it('Deve executar console.log ao chamar a função sucess', () => {
    logger.success('test');
    expect(spyLog).toHaveBeenCalledTimes(0);
  });

  it('Deve executar console.error ao chamar a função log error', () => {
    logger.error('test');
    expect(spyLog).toHaveBeenCalledTimes(1);
  })
})
