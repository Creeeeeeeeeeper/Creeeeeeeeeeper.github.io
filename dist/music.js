const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    preload: 'metadata',
    audio: [
        {
            name: 'Without You (Explicit)',
            artist: 'Avicii/Sadro Cavazza',
            url: 'https://down-load.lanrar.com/file/?UzUFOw4/BDUHDgQ8Cj8HawM8AjpQWFA7BXYBb1dkAHQEcAEPXW9Xdgl3BxQDL1EgBjAHawc7A2hVJgEuUCJXO1MjBWEOdQQ2BzgEPgo7B1kDMAJjUDJQYwU7ATdXPwAyBDMBYV0yVzcJeQc3AyRRbQZrBzMHYQMyVWABP1A8V3BTIwUiDm4EYgdhBGAKagcpA2kCMFAgUGMFMQEoVzMAZwRnATNdOVc1CToHZgNgUWIGaAcyB2sDM1VqATBQaldmUzcFZw5hBGgHNwRnCjwHZANqAj5QaVAxBTEBYlclAGwEdAFlXSZXdgksBzQDJVE5BjgHPwdqAzZVZQE+UDRXY1NhBXQOJwQ5BzwENwo4BzsDaAIwUD1QYgU6ATFXMwAzBD0BYV0uVy0JeQc3AztRJwZhBzMHbwMzVWIBP1A6V2FTYQVmDmIEdgckBCIKKQc7A2gCMFA9UGIFOgExVz4ANgQzAW5dJld2CTYHIQNqUWIGbgcxB3YDNlVrASlQPldiU2EFfA5iBGEHZwR8CngHYgM2AnBQYVANBWEBbFc2ADE=',
            cover: '//y.qq.com/music/photo_new/T002R300x300M000003KjODP2FwTHe_2.jpg?max_age=2592000',
        },
        {
            name: 'The Nights',
            artist: 'Avicii',
            url: 'https://down-load.lanrar.com/file/?B2FTbQEwV2ZTWgU9BTBQPAY5BT0ACwJoUjBSdAcVWzMCZQA/CSAPKAB4Bj0CJgIwUCxVNlBmVzlRM1MKVGFXMgc6UzUBZVczUzEFZwVhUGkGaQUxAHkCZlImUmkHbVtjAjYAbwlgD2MAZgZ2AiYCc1A3VWJQP1dnUWJTelQ4V2EHKFM1AW9XLFNhBWUFaVBjBjkFZgA6AmZSY1JtB2tbYgIzADQJZg85ADcGZwI1AjFQaVVlUG1XY1FiUzBUalc0BzJTYAFrVzBTKwU+BSFQYgZ6BXUALAJlUidSPQc/W2cCMABgCWMPYgBuBmUCZAIlUH5VOVBiVzBRMFNoVDlXYQc1UzQBZFc1Uz0FYQVhUGMGcgUuAHkCZlI5UiMHZltqAiQAIgkkDywAawZhAmECMVA6VWhQOVdjUWFTY1Q7V3AHclNtASxXPlM3BWEFYlB/BmsFOQBxAjJSYVJmB3VbawIzAGEJeg99ADIGPwIhAm1QVVUzUGRXaFFm',
            cover: '//y.qq.com/music/photo_new/T002R300x300M000000prHhU3BnrO1_2.jpg?max_age=2592000',
        }
    ]
});