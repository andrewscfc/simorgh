import loggerMock from '#testHelpers/loggerMock';
import logResponseTime from '.';

const req = {
  path: '/path',
};

const res = {
  on: jest.fn().mockImplementation((event, callback) => callback()),
};

const next = jest.fn();

describe('logResponseTime', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log response time in nanoseconds with path', () => {
    process.hrtime = jest
      .fn()
      .mockImplementationOnce(() => 'startTime')
      .mockImplementationOnce(() => [1, 12345]);

    logResponseTime(req, res, next);

    expect(loggerMock.debug).toBeCalledWith('server_response_time', {
      nanoseconds: 1000012345,
      path: '/path',
    });

    expect(process.hrtime).toHaveBeenCalledWith('startTime');

    expect(next).toHaveBeenCalled();
  });

  it('should log slow response time in nanoseconds with path', () => {
    process.hrtime = jest
      .fn()
      .mockImplementationOnce(() => 'startTime')
      .mockImplementationOnce(() => [3, 12345]);

    logResponseTime(req, res, next);

    expect(loggerMock.info).toBeCalledWith('slow_server_response_time', {
      nanoseconds: 3000012345,
      path: '/path',
    });
  });
});
