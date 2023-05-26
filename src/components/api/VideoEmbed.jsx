import { useState, useEffect } from 'react';

export default function VideoEmbed() {
  const [fetchedUrl, setFetchedUrl] = useState();
  const [fetchError, setFetchError] = useState(false);
  const [fetchComplete, setFetchComplete] = useState(false);

  const searchPlaylist = () => {
    const API_KEY = import.meta.env.PUBLIC_YT_KEY;
    const CHANNEL_ID = 'UC03LjkTGeTL66b5evSLqxag';
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;

    fetch(channelUrl)
      .then((response) => response.json())
      .then((data) => {
        const playlistId =
          data.items[0].contentDetails.relatedPlaylists.uploads;
        const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${API_KEY}`;
        return fetch(playlistUrl);
      })
      .then((response) => response.json())
      .then((data) => {
        const videoId = data.items[0].snippet.resourceId.videoId;
        const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
        console.log(embeddedUrl);
        setFetchedUrl(embeddedUrl);
      })
      .catch((error) => {
        console.error('ERROR - Failed to retrieve the latest video:', error);
        setFetchError(true);
      })
      .finally(() => {
        setFetchComplete(true);
      });
  };

  useEffect(() => {
    if (!fetchedUrl && !fetchComplete) searchPlaylist();
  }, [fetchedUrl, fetchComplete]);

  return (
    <div
      id='embed-container'
      className='flex flex-col items-center content-center m-2'
    >
      {fetchComplete && fetchedUrl && !fetchError ? (
        <iframe
          className='rounded-lg shadow-xl'
          width='320'
          height='180'
          src={fetchedUrl}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen='true'
        ></iframe>
      ) : (
        fetchComplete && (
          <aside className='text-cDark bg-mid p-4 rounded-md shadow-xl'>
            <p>Failed to embed the video.</p>
            <p>
              If the issue persists, you can{' '}
              <a className='text-cAccent' href='contact'>
                contact
              </a>{' '}
              me to address the problem.
            </p>
          </aside>
        )
      )}
    </div>
  );
}
