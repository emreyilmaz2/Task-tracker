using Xunit;
using TaskTrackerApi.Models;

namespace TaskTrackerApi.Tests
{
    public class TaskItemTests
    {
        [Fact]
        public void NewTaskItem_ShouldHaveIsDoneFalseByDefault()
        {
            // Arrange
            var task = new TaskItem
            {
                Id = 1,
                Description = "Test görevi"
            };

            // Assert
            Assert.False(task.IsDone);
        }
        [Fact]
        public void NewTaskItem_ShouldHaveDescriptionSetCorrectly()
        {
            var task = new TaskItem
            {
                Id = 2,
                Description = "Bug fix"
            };
            Assert.Equal("Bug fix", task.Description);
        }
        [Fact]
        public void ThisTestShouldFail()
        {
            Assert.Equal(1, 2);
        }
    }
}
