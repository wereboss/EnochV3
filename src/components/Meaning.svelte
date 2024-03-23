<script>
  export let word;
  let errorMessage = "No connection. Check your internet";

  async function getWordMeaning(word) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    const json = await response.json();
    console.log(json);

    if (response.ok) {
      return json;
    } else {
      errorMessage = json.message;
      throw new Error(json);
    }
  }

  let promise = getWordMeaning(word);

</script>

<div class="meaning-page">
  <h1>
    {word.toLowerCase()}
  </h1>

  {#await promise}
    <p>Loading...</p>
  {:then entries}

{#each entries as entry}
  {#each entry.meanings as meaning}
    <div class="entry">
      <div class="part-of-speech">
        {meaning.partOfSpeech}
      </div>

      <ol>
        {#each meaning.definitions as definition}
          <li>
            {definition.definition}
            <br />

            <div class="example">
              {#if definition.example}
                {definition.example}
              {/if}
            </div>
          </li>
        {/each}
      </ol>
    </div>
  {/each}
{/each}

  {:catch}
    {errorMessage}
  {/await}

</div>
